import {useRouter} from 'next/router';
import styles from "../../styles/User.module.scss"
import MainContainer from "../../components/MainContainer";
// import {getServerSideProps, getStaticProps} from "next/dist/build/templates/pages";

export default function User({user}) {
    const {query} = useRouter();

    return (
        <MainContainer className={styles.user}>
            <h1>User with id {query.id}</h1>
            <div>User name - {user.name}</div>
        </MainContainer>
    )
}

/*export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const user = await response.json();

    return {
        props: {user}
    }
}*/

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: {user}
    }
}
