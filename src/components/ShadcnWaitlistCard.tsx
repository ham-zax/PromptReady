import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { BorderBeam } from "./magicui/border-beam";

interface ShadcnWaitlistCardProps {
  onPrimaryAction: () => void;
}
 
export function ShadcnWaitlistCard({ onPrimaryAction }: ShadcnWaitlistCardProps) {
  return (
    // THE FIX: A new wrapper div that acts as the positioning context.
    <div className="relative w-full max-w-md">
      {/* The Card is now a simple child, with no positioning classes needed. */}
      <Card className="shadow-xl">
        <CardContent className="p-8 flex flex-col items-start gap-4">
          <p className="text-lg text-muted-foreground">
            Be the first to experience perfectly clean web copy.
          </p>
          <Button
            onClick={onPrimaryAction}
            className="w-full text-lg h-12"
            aria-label="Join the Waitlist for Early Access"
          >
            <div className="flex items-center justify-between w-full">
              <span>Join the Waitlist for Early Access</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Button>
          <div className="text-sm text-muted-foreground self-center text-center">
            <p>No credit card required</p>
            <p>Get exclusive launch-day updates</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}