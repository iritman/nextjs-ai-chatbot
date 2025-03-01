import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 p-2 
          bg-slate-200 rounded-xl text-gray-600 dark:text-gray-300 text-center gap-2 sm:gap-0">
            <Link
                href="mailto:iritman@gmail.com"
                target='_blank'
                className="flex items-center justify-center sm:justify-start gap-2 text-blue-500 w-full sm:w-1/3">
                <EnvelopeClosedIcon /> iritman@gmail.com
            </Link>

            <Link
                href="https://www.linkedin.com/in/naiem-yousefifard-11086729b"
                target='_blank'
                className="flex items-center justify-center gap-2 text-blue-500 w-full sm:w-1/3">
                <LinkedInLogoIcon /> Naiem Yousefifard
            </Link>

            <Link
                href="https://github.com/iritman"
                target='_blank'
                className="flex items-center justify-center sm:justify-end gap-2 text-blue-500 w-full sm:w-1/3">
                <GitHubLogoIcon /> iritman
            </Link>
        </div>
    )
}

export default Contact