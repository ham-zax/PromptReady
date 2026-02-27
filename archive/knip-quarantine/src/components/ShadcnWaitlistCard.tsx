import { ArrowRight } from '@/components/ui/Icons';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface ShadcnWaitlistCardProps {
  onPrimaryAction: () => void;
}

export function ShadcnWaitlistCard({ onPrimaryAction }: ShadcnWaitlistCardProps) {
  return (
    // THE FIX: A new wrapper div that acts as the positioning context.
    <div className="relative w-full max-w-md">
      {/* The Card is now a simple child, with no positioning classes needed. */}
      <Card className="shadow-lg">
        <CardContent className="flex flex-col items-start gap-4 p-8">
          <p className="text-lg text-muted-foreground">
            Be the first to experience perfectly clean web copy.
          </p>
          <Button
            onClick={onPrimaryAction}
            className="h-12 w-full text-lg"
            aria-label="Join the Waitlist for Early Access"
          >
            <div className="flex w-full items-center justify-between">
              <span>Join the Waitlist for Early Access</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </Button>
          <div className="self-center text-center text-sm text-muted-foreground">
            <p>No credit card required</p>
            <p>Get exclusive launch-day updates</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
