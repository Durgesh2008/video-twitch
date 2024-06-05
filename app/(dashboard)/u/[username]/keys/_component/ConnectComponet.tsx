"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,DialogClose,DialogContent,DialogHeader,DialogTrigger,DialogTitle
 } from "@/components/ui/dialog"

 import {
    Alert,
    AlertDescription,
    AlertTitle
 } from  "@/components/ui/alert"

 import {Select
    ,SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem
} from "@/components/ui/select"
import { AlertTriangle } from "lucide-react"
const ConnectModel = () => {
  return (
  <Dialog>
    <DialogTrigger asChild>
        <Button variant="primary">
           Generate Connection
        </Button>
    </DialogTrigger>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>
                Generate Connection
            </DialogTitle>
        </DialogHeader>
        <Select>
            <SelectTrigger className="w-full">
            <SelectContent>
                <SelectItem value="RTMP">RTMP</ SelectItem >
                <SelectItem value="WHIP">WHIP</SelectItem>
            </SelectContent>
            </SelectTrigger>
        </Select>
        <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>
                Wraning!
            </AlertTitle>
            <AlertDescription>
                This action will reset  all active streams using the current connection
            </AlertDescription>
        </Alert>
        <div className="flex justify-between">
            <DialogClose>
                <Button variant="ghost">
                cancel
                </Button>
            </DialogClose>
            <Button
            onClick={()=>{}}
            variant="primary"
            >
                Generate
            </Button>
        </div>
    </DialogContent>
  </Dialog>
  )
}

export default ConnectModel