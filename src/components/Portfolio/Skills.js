import { forwardRef } from "react"

const Skills = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="bg-yellow-500 h-[100vh] flex items-center justify-center">
            This is the skills section
        </div>
    )
})

export default Skills