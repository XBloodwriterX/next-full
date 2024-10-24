import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({user}) => {

    return (
        <MainContainer>
            <h1>User List</h1>
            <ul>
                {user.map((user) =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`} legacyBehavior>
                            <a className="link">{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await response.json();

    return {
        props: {user}
    }
}
