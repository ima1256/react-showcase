import { forwardRef } from "react"

const Contact = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="h-[100vh] flex items-center justify-center">
            This is the contact section
        </div>
    )
})

export default Contact