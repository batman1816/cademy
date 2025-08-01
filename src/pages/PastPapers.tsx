import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PastPapers = () => {
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const papers = [
    { id: 1, subject: "Mathematics", level: "A-level", year: "2024", type: "QP", session: "May/June" },
    { id: 2, subject: "Mathematics", level: "A-level", year: "2024", type: "MS", session: "May/June" },
    { id: 3, subject: "Physics", level: "A-level", year: "2024", type: "QP", session: "May/June" },
    { id: 4, subject: "Chemistry", level: "O-level", year: "2024", type: "QP", session: "Oct/Nov" },
  ];

  const filteredPapers = papers.filter(paper => {
    return (!level || paper.level === level) &&
           (!subject || paper.subject === subject) &&
           (!year || paper.year === year) &&
           (!type || paper.type === type);
  });

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Free Past Papers</h1>
          <p className="text-lg text-muted-foreground">
            Access thousands of question papers and mark schemes from 2018-2025
          </p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Exam Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="O-level">O-level</SelectItem>
                <SelectItem value="A-level">A-level</SelectItem>
              </SelectContent>
            </Select>

            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mathematics">Mathematics</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
                <SelectItem value="Chemistry">Chemistry</SelectItem>
                <SelectItem value="Biology">Biology</SelectItem>
              </SelectContent>
            </Select>

            <Select value={year} onValueChange={setYear}>
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 8 }, (_, i) => {
                  const yr = (2025 - i).toString();
                  return <SelectItem key={yr} value={yr}>{yr}</SelectItem>;
                })}
              </SelectContent>
            </Select>

            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="QP">Question Paper</SelectItem>
                <SelectItem value="MS">Mark Scheme</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Papers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper) => (
            <Card key={paper.id} className="p-6 hover:shadow-elevated transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-secondary" />
                  <div>
                    <h3 className="font-semibold text-primary">{paper.subject}</h3>
                    <p className="text-sm text-muted-foreground">{paper.level} • {paper.session}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  paper.type === 'QP' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}>
                  {paper.type}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm text-muted-foreground">Year: {paper.year}</p>
              </div>

              <Button className="w-full" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Free
              </Button>
            </Card>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-primary mb-2">No papers found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to find more papers.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PastPapers;