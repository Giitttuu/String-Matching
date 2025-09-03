import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme()

  return (
    
  )
}

export { Toaster, toast }
