import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchJob = async () => {
            const res = await fetch(`/api/jobs/${id}`);
            const data = await res.json();
            setJob(data);
            setLoading(false);
        }

        fetchJob();
    }, [])

    return  loading ? <Spinner/> : (<h1>{job.title}</h1>);
}

export default JobPage
