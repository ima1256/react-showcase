import { forwardRef } from "react"

const SectionWrapper = forwardRef(({children, ...props}, ref) => {
    return (
        <div ref={ref} {...props} className="bg-green-500 h-[100vh] w-full flex items-center justify-center">
            {children}
        </div>
    )
})

export default SectionWrapper