
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
export function ModeToggle() {
  const { setTheme } = useTheme()
return (
    <>
  
<Button
    variant="ghost"
    size="icon"
    onClick={() => setTheme("light")}
  >
    Light
  </Button>
  <Button
    variant="ghost"
    size="icon"
    onClick={() => setTheme("dark")}
    >
    Dark
  </Button>
    </>
)}
/*

 */