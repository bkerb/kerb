import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="flex md:ml-24 items-center md:px-6 py-10 md:py-20 bg-black text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-40">
          <div className="flex flex-col gap-6 md:gap-0">
            <p className="md:mb-4">Subscribe for everything KERB™</p>
            <form className="flex gap-4">
              <Input
                placeholder="Email address"
                className="rounded-none bg-transparent"
              />
              <Button variant="secondary" className="rounded-none">
                Subscribe
              </Button>
            </form>
            <div className="flex items-center mt-auto gap-4">
              <p>Follow us</p>
              <div className="flex items-center gap-6">
                <Instagram className="h-5 w-5" />
                <Facebook className="h-5 w-5" />
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>
          <ul className="space-y-4">
            <li>Returns</li>
            <li>Delivery Info</li>
            <li>Prviacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
