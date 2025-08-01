import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, CheckCircle, XCircle, Users, FileText, Video, User } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // Mock data
  const subscriptionRequests = [
    { id: 1, name: "Ahmed Hassan", email: "ahmed@email.com", phone: "01712345678", bkashId: "BKX123456", status: "pending" },
    { id: 2, name: "Fatima Khan", email: "fatima@email.com", phone: "01798765432", bkashId: "BKX789012", status: "pending" }
  ];

  const purchaseRequests = [
    { id: 1, name: "Sakib Rahman", email: "sakib@email.com", item: "A-Level Math Guide", paymentId: "PAY123", status: "pending" },
    { id: 2, name: "Nusrat Jahan", email: "nusrat@email.com", item: "Physics Practical Guide", paymentId: "PAY456", status: "pending" }
  ];

  const handleLogin = () => {
    if (password === "123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-md mx-auto p-8">
            <h1 className="text-2xl font-bold text-primary text-center mb-6">Admin Login</h1>
            <div className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                />
              </div>
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Admin Panel</h1>
          <p className="text-lg text-muted-foreground">
            Manage content, subscriptions, and user requests
          </p>
        </div>

        <Tabs defaultValue="subscriptions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="purchases">Purchases</TabsTrigger>
            <TabsTrigger value="routines">Routines</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          {/* Subscription Management */}
          <TabsContent value="subscriptions">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Users className="h-6 w-6 text-secondary" />
                <h2 className="text-xl font-semibold text-primary">Subscription Requests</h2>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>bKash ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subscriptionRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.name}</TableCell>
                      <TableCell>{request.email}</TableCell>
                      <TableCell>{request.phone}</TableCell>
                      <TableCell>{request.bkashId}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{request.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="default">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Purchase Approvals */}
          <TabsContent value="purchases">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <FileText className="h-6 w-6 text-secondary" />
                <h2 className="text-xl font-semibold text-primary">Purchase Approvals</h2>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>Payment ID</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {purchaseRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.name}</TableCell>
                      <TableCell>{request.email}</TableCell>
                      <TableCell>{request.item}</TableCell>
                      <TableCell>{request.paymentId}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{request.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="default">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Unlock
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          {/* Routine Upload */}
          <TabsContent value="routines">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Upload className="h-6 w-6 text-secondary" />
                <h2 className="text-xl font-semibold text-primary">Upload Routine Banner</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label>Teacher Name</Label>
                  <Input placeholder="Enter teacher name" />
                </div>
                <div>
                  <Label>Subject</Label>
                  <Input placeholder="Enter subject" />
                </div>
                <div>
                  <Label>Week/Period</Label>
                  <Input placeholder="e.g., Week 1, January 2024" />
                </div>
                <div>
                  <Label>Banner Image</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Upload banner-size routine image (16:9 aspect ratio recommended)</p>
                    <p className="text-xs text-muted-foreground mt-2">Subject and teacher name will be overlaid on the image</p>
                    <Button variant="outline" className="mt-4">Browse Files</Button>
                  </div>
                </div>
                <Button className="w-full">Upload Routine Banner</Button>
              </div>
            </Card>
          </TabsContent>

          {/* Faculty Management */}
          <TabsContent value="faculty">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <User className="h-6 w-6 text-secondary" />
                <h2 className="text-xl font-semibold text-primary">Add Faculty Member</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Faculty Name</Label>
                    <Input placeholder="Enter faculty name" />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea placeholder="Enter faculty description" />
                  </div>
                  <div>
                    <Label>WhatsApp Number</Label>
                    <Input placeholder="880xxxxxxxxxx" />
                  </div>
                  <Button className="w-full">Add Faculty</Button>
                </div>
                
                <div>
                  <Label>Profile Image</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Drag and drop profile image here</p>
                    <Button variant="outline" className="mt-4">Browse Files</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Content Management */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Video Upload */}
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Video className="h-6 w-6 text-secondary" />
                  <h3 className="text-lg font-semibold text-primary">Upload Lecture Videos</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label>Video Title</Label>
                    <Input placeholder="Enter video title" />
                  </div>
                  <div>
                    <Label>Subject</Label>
                    <Input placeholder="Enter subject" />
                  </div>
                  <div>
                    <Label>Video File</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Video className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Drag video file here</p>
                    </div>
                  </div>
                  <Button className="w-full">Upload Video</Button>
                </div>
              </Card>

              {/* Past Papers Upload */}
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <FileText className="h-6 w-6 text-secondary" />
                  <h3 className="text-lg font-semibold text-primary">Upload Past Papers</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label>Subject</Label>
                    <Input placeholder="Enter subject" />
                  </div>
                  <div>
                    <Label>Year</Label>
                    <Input placeholder="Enter year" />
                  </div>
                  <div>
                    <Label>Type</Label>
                    <Input placeholder="QP or MS" />
                  </div>
                  <div>
                    <Label>Paper File</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Drag PDF file here</p>
                    </div>
                  </div>
                  <Button className="w-full">Upload Paper</Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;