'use client';
import { useRouter } from 'next/navigation';
export default function EditProfile() {
    const router = useRouter();

    function handleClick() {
        router.push('/settings');
    }
    return (
        <button
            className="btn btn-sm btn-outline-secondary action-btn"
            onClick={handleClick}>
            <i className="ion-gear-a"></i>
            &nbsp; Edit Profile Settings
        </button>
    )
}