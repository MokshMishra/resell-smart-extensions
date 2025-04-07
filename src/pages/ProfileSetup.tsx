
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { Camera, MapPin, Phone, Upload, User } from "lucide-react";

const ProfileSetup = () => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
    // In a real app, this would include profile setup logic
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
          <CardDescription>
            Tell us more about yourself to enhance your ResellSmart experience
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32 border-4 border-purple-100">
                <AvatarImage src={avatarPreview || ""} alt="Profile picture" />
                <AvatarFallback className="bg-purple-100 text-purple-600 text-4xl">
                  <User />
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center">
                <Label
                  htmlFor="avatar-upload"
                  className="cursor-pointer bg-purple-50 hover:bg-purple-100 text-purple-600 px-4 py-2 rounded-md flex items-center gap-2 text-sm"
                >
                  <Camera className="h-4 w-4" />
                  Upload Photo
                </Label>
                <Input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="phone" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="location" className="pl-10" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="account-type">Account Type</Label>
              <Select defaultValue="buyer">
                <SelectTrigger>
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="seller">Seller</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="payment-preferences">Payment Method Preferences</Label>
              <Select defaultValue="bank">
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="card">Credit/Debit Card</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell others a bit about yourself..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Verification Documents</Label>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-purple-600">Click to upload</span> or drag and
                    drop
                  </div>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG or PDF (max. 5MB)
                  </p>
                </div>
                <Input
                  id="document-upload"
                  type="file"
                  className="hidden"
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
              Save Profile
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ProfileSetup;
