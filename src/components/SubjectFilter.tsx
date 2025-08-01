import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

const SubjectFilter = () => {
  const [examLevel, setExamLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");

  const examLevels = ["O-level", "A-level"];
  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology", "English", 
    "Accounting", "Business Studies", "Economics", "Computer Science", "ICT"
  ];
  const years = Array.from({ length: 8 }, (_, i) => (2025 - i).toString());

  const handleSearch = () => {
    // Navigate to past papers with filters
    const params = new URLSearchParams();
    if (examLevel) params.set('level', examLevel);
    if (subject) params.set('subject', subject);
    if (year) params.set('year', year);
    
    window.location.href = `/past-papers?${params.toString()}`;
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 shadow-card">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">
            Find Your Past Papers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Exam Level */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Exam Level</label>
              <Select value={examLevel} onValueChange={setExamLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  {examLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Subject</label>
              <Select value={subject} onValueChange={setSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subj) => (
                    <SelectItem key={subj} value={subj}>
                      {subj}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Year */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Year</label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((yr) => (
                    <SelectItem key={yr} value={yr}>
                      {yr}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button onClick={handleSearch} size="lg" className="h-11">
              <Search className="mr-2 h-4 w-4" />
              Find Papers
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SubjectFilter;