import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          
            
              {title && {title}}
              {description && (
                {description}
              )}
            
            {action}
            
          
        )
      })}
      
    
  )
}
