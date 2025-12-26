import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Brand colors
const COLORS = {
  primary: '#a855f7', // Purple
  secondary: '#ec4899', // Pink
  dark: '#1e293b',
  light: '#f8fafc',
  text: '#0f172a',
  textLight: '#64748b',
};

/**
 * Add WhyNot branding header to PDF
 */
const addHeader = (doc: jsPDF, title: string) => {
  // Add logo/brand name
  doc.setFontSize(24);
  doc.setTextColor(COLORS.primary);
  doc.text('WhyNot', 20, 25);

  // Add subtitle
  doc.setFontSize(10);
  doc.setTextColor(COLORS.textLight);
  doc.text('Career Intelligence Platform', 20, 32);

  // Add title
  doc.setFontSize(18);
  doc.setTextColor(COLORS.text);
  doc.text(title, 20, 50);

  // Add horizontal line
  doc.setDrawColor(COLORS.primary);
  doc.setLineWidth(0.5);
  doc.line(20, 55, 190, 55);

  return 65; // Return Y position for content start
};

/**
 * Add footer with page numbers and branding
 */
const addFooter = (doc: jsPDF) => {
  const pageCount = doc.getNumberOfPages();
  const pageHeight = doc.internal.pageSize.height;

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);

    // Add line
    doc.setDrawColor(COLORS.textLight);
    doc.setLineWidth(0.1);
    doc.line(20, pageHeight - 20, 190, pageHeight - 20);

    // Add page number
    doc.setFontSize(9);
    doc.setTextColor(COLORS.textLight);
    doc.text(
      `Page ${i} of ${pageCount}`,
      doc.internal.pageSize.width / 2,
      pageHeight - 12,
      { align: 'center' }
    );

    // Add generation date
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    doc.text(`Generated on ${date}`, 20, pageHeight - 12);

    // Add website
    doc.text('whynot.placement', 190, pageHeight - 12, { align: 'right' });
  }
};

/**
 * Export rejection analysis report as PDF
 */
export const exportRejectionAnalysisPDF = (data: {
  userName: string;
  totalApplications: number;
  rejections: number;
  rejectionRate: number;
  commonReasons: Array<{ reason: string; count: number; percentage: number }>;
  insights: string[];
  recommendations: string[];
  skillGaps?: string[];
  interviewStats?: {
    totalInterviews: number;
    technicalPass: number;
    behavioralPass: number;
    averageScore: number;
  };
}) => {
  const doc = new jsPDF();

  // Add header
  let yPos = addHeader(doc, 'Rejection Analysis Report');

  // User info section
  doc.setFontSize(12);
  doc.setTextColor(COLORS.text);
  doc.text(`Student: ${data.userName}`, 20, yPos);
  yPos += 10;

  // Key metrics section
  doc.setFontSize(14);
  doc.setTextColor(COLORS.primary);
  doc.text('Key Metrics', 20, yPos);
  yPos += 10;

  doc.setFontSize(11);
  doc.setTextColor(COLORS.text);
  doc.text(`Total Applications: ${data.totalApplications}`, 25, yPos);
  yPos += 7;
  doc.text(`Rejections: ${data.rejections}`, 25, yPos);
  yPos += 7;
  doc.text(`Rejection Rate: ${data.rejectionRate.toFixed(1)}%`, 25, yPos);
  yPos += 15;

  // Common rejection reasons table
  if (data.commonReasons.length > 0) {
    doc.setFontSize(14);
    doc.setTextColor(COLORS.primary);
    doc.text('Common Rejection Reasons', 20, yPos);
    yPos += 10;

    autoTable(doc, {
      startY: yPos,
      head: [['Reason', 'Count', 'Percentage']],
      body: data.commonReasons.map((r) => [
        r.reason,
        r.count.toString(),
        `${r.percentage.toFixed(1)}%`,
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: COLORS.primary,
        textColor: '#ffffff',
        fontSize: 11,
        fontStyle: 'bold',
      },
      bodyStyles: {
        textColor: COLORS.text,
        fontSize: 10,
      },
      alternateRowStyles: {
        fillColor: COLORS.light,
      },
      margin: { left: 20, right: 20 },
    });

    yPos = (doc as any).lastAutoTable.finalY + 15;
  }

  // Interview statistics (if available)
  if (data.interviewStats) {
    // Check if we need a new page
    if (yPos > 200) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(COLORS.primary);
    doc.text('Interview Performance', 20, yPos);
    yPos += 10;

    doc.setFontSize(11);
    doc.setTextColor(COLORS.text);
    doc.text(`Total Interviews: ${data.interviewStats.totalInterviews}`, 25, yPos);
    yPos += 7;
    doc.text(`Technical Pass Rate: ${data.interviewStats.technicalPass}%`, 25, yPos);
    yPos += 7;
    doc.text(`Behavioral Pass Rate: ${data.interviewStats.behavioralPass}%`, 25, yPos);
    yPos += 7;
    doc.text(`Average Score: ${data.interviewStats.averageScore.toFixed(1)}/10`, 25, yPos);
    yPos += 15;
  }

  // Skill gaps (if available)
  if (data.skillGaps && data.skillGaps.length > 0) {
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(COLORS.primary);
    doc.text('Identified Skill Gaps', 20, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setTextColor(COLORS.text);
    data.skillGaps.forEach((skill, _index) => {
      doc.text(`${_index + 1}. ${skill}`, 25, yPos);
      yPos += 6;
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
    });
    yPos += 10;
  }

  // AI Insights section
  if (data.insights.length > 0) {
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(COLORS.primary);
    doc.text('AI-Generated Insights', 20, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setTextColor(COLORS.text);
    data.insights.forEach((insight, _index) => {
      const lines = doc.splitTextToSize(`${_index + 1}. ${insight}`, 170);
      doc.text(lines, 25, yPos);
      yPos += lines.length * 6 + 3;

      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
    });
    yPos += 10;
  }

  // Recommendations section
  if (data.recommendations.length > 0) {
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(COLORS.primary);
    doc.text('Recommendations', 20, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setTextColor(COLORS.text);
    data.recommendations.forEach((rec, _index) => {
      const lines = doc.splitTextToSize(`${_index + 1}. ${rec}`, 170);
      doc.text(lines, 25, yPos);
      yPos += lines.length * 6 + 3;

      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
    });
  }

  // Add footer
  addFooter(doc);

  // Save the PDF
  const fileName = `rejection-analysis-${data.userName.replace(/\s+/g, '-')}-${Date.now()}.pdf`;
  doc.save(fileName);
};

/**
 * Export application history as PDF
 */
export const exportApplicationHistoryPDF = (data: {
  userName: string;
  applications: Array<{
    company: string;
    position: string;
    appliedDate: string;
    status: string;
    lastUpdate: string;
  }>;
  summary: {
    total: number;
    pending: number;
    accepted: number;
    rejected: number;
  };
}) => {
  const doc = new jsPDF();

  // Add header
  let yPos = addHeader(doc, 'Application History');

  // User info
  doc.setFontSize(12);
  doc.setTextColor(COLORS.text);
  doc.text(`Student: ${data.userName}`, 20, yPos);
  yPos += 15;

  // Summary section
  doc.setFontSize(14);
  doc.setTextColor(COLORS.primary);
  doc.text('Summary', 20, yPos);
  yPos += 10;

  doc.setFontSize(11);
  doc.setTextColor(COLORS.text);
  doc.text(`Total Applications: ${data.summary.total}`, 25, yPos);
  yPos += 7;
  doc.text(`Pending: ${data.summary.pending}`, 25, yPos);
  yPos += 7;
  doc.text(`Accepted: ${data.summary.accepted}`, 25, yPos);
  yPos += 7;
  doc.text(`Rejected: ${data.summary.rejected}`, 25, yPos);
  yPos += 15;

  // Applications table
  doc.setFontSize(14);
  doc.setTextColor(COLORS.primary);
  doc.text('Application Details', 20, yPos);
  yPos += 10;

  autoTable(doc, {
    startY: yPos,
    head: [['Company', 'Position', 'Applied Date', 'Status', 'Last Update']],
    body: data.applications.map((app) => [
      app.company,
      app.position,
      app.appliedDate,
      app.status,
      app.lastUpdate,
    ]),
    theme: 'striped',
    headStyles: {
      fillColor: COLORS.primary,
      textColor: '#ffffff',
      fontSize: 10,
      fontStyle: 'bold',
    },
    bodyStyles: {
      textColor: COLORS.text,
      fontSize: 9,
    },
    alternateRowStyles: {
      fillColor: COLORS.light,
    },
    margin: { left: 20, right: 20 },
    columnStyles: {
      0: { cellWidth: 40 }, // Company
      1: { cellWidth: 45 }, // Position
      2: { cellWidth: 30 }, // Applied Date
      3: { cellWidth: 25 }, // Status
      4: { cellWidth: 30 }, // Last Update
    },
  });

  // Add footer
  addFooter(doc);

  // Save the PDF
  const fileName = `application-history-${data.userName.replace(/\s+/g, '-')}-${Date.now()}.pdf`;
  doc.save(fileName);
};

/**
 * Export resume analysis report as PDF
 */
export const exportResumeAnalysisPDF = (data: {
  userName: string;
  fileName: string;
  analysisDate: string;
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  atsScore: number;
  keywordMatches: Array<{ keyword: string; found: boolean }>;
}) => {
  const doc = new jsPDF();

  // Add header
  let yPos = addHeader(doc, 'Resume Analysis Report');

  // User and file info
  doc.setFontSize(12);
  doc.setTextColor(COLORS.text);
  doc.text(`Student: ${data.userName}`, 20, yPos);
  yPos += 7;
  doc.text(`Resume: ${data.fileName}`, 20, yPos);
  yPos += 7;
  doc.text(`Analysis Date: ${data.analysisDate}`, 20, yPos);
  yPos += 15;

  // Scores section
  doc.setFontSize(14);
  doc.setTextColor(COLORS.primary);
  doc.text('Scores', 20, yPos);
  yPos += 10;

  doc.setFontSize(11);
  doc.setTextColor(COLORS.text);
  doc.text(`Overall Score: ${data.score}/100`, 25, yPos);
  yPos += 7;
  doc.text(`ATS Compatibility: ${data.atsScore}/100`, 25, yPos);
  yPos += 15;

  // Strengths
  doc.setFontSize(14);
  doc.setTextColor(COLORS.primary);
  doc.text('Strengths', 20, yPos);
  yPos += 10;

  doc.setFontSize(10);
  doc.setTextColor(COLORS.text);
  data.strengths.forEach((strength, index) => {
    const lines = doc.splitTextToSize(`✓ ${strength}`, 170);
    doc.text(lines, 25, yPos);
    yPos += lines.length * 6 + 2;
  });
  yPos += 10;

  // Weaknesses
  if (yPos > 220) {
    doc.addPage();
    yPos = 20;
  }

  doc.setFontSize(14);
  doc.setTextColor(COLORS.secondary);
  doc.text('Areas for Improvement', 20, yPos);
  yPos += 10;

  doc.setFontSize(10);
  doc.setTextColor(COLORS.text);
  data.weaknesses.forEach((weakness, index) => {
    const lines = doc.splitTextToSize(`• ${weakness}`, 170);
    doc.text(lines, 25, yPos);
    yPos += lines.length * 6 + 2;

    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
  });
  yPos += 10;

  // Suggestions
  if (yPos > 220) {
    doc.addPage();
    yPos = 20;
  }

  doc.setFontSize(14);
  doc.setTextColor(COLORS.primary);
  doc.text('Improvement Suggestions', 20, yPos);
  yPos += 10;

  doc.setFontSize(10);
  doc.setTextColor(COLORS.text);
  data.suggestions.forEach((suggestion, index) => {
    const lines = doc.splitTextToSize(`${index + 1}. ${suggestion}`, 170);
    doc.text(lines, 25, yPos);
    yPos += lines.length * 6 + 3;

    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
  });
  yPos += 15;

  // Keyword analysis table
  if (data.keywordMatches.length > 0) {
    if (yPos > 200) {
      doc.addPage();
      yPos = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(COLORS.primary);
    doc.text('Keyword Analysis', 20, yPos);
    yPos += 10;

    autoTable(doc, {
      startY: yPos,
      head: [['Keyword', 'Status']],
      body: data.keywordMatches.map((km) => [
        km.keyword,
        km.found ? '✓ Found' : '✗ Missing',
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: COLORS.primary,
        textColor: '#ffffff',
        fontSize: 11,
        fontStyle: 'bold',
      },
      bodyStyles: {
        textColor: COLORS.text,
        fontSize: 10,
      },
      alternateRowStyles: {
        fillColor: COLORS.light,
      },
      margin: { left: 20, right: 20 },
      columnStyles: {
        0: { cellWidth: 100 },
        1: { cellWidth: 70 },
      },
    });
  }

  // Add footer
  addFooter(doc);

  // Save the PDF
  const fileName = `resume-analysis-${data.userName.replace(/\s+/g, '-')}-${Date.now()}.pdf`;
  doc.save(fileName);
};
