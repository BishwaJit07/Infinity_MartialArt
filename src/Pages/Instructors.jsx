import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Instructors = () => {
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch("http://localhost:5000/users");
        return res.json();
      });
console.log(users);
    return (
        Array.isArray(users) &&
            users.map((user, index) => {
                if(user.role1==='instrctor'){

                    return(
                        <p key={user._id}>{user.name}</p>
                    )
                    
                }
            }
        
            ))}

export default Instructors;