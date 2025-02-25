import { ReactElement } from "react";

interface HomeCardProps {
    content: ReactElement;
}

export default function HomeCard({content}: HomeCardProps) {
    return <div className='border-2 border-slate-900 rounded-3xl shadow-xl shadow-purple-odyssey m-2 p-1 sm:m-0 sm:p-6'>
        {content}
    </div>
}