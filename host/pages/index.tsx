import React from 'react';
import Head from "next/head";

import {DynamicWidget} from '../components/DynamicWidget';

const IndexPage = () => {
    return (
        <>
            {/* <Head>
                <script src="http://localhost:3002/remoteEntry.js"></script>
            </Head> */}

            <p>うおおおおおおおおおおおおおおおおおお</p>
            <DynamicWidget scope="app2" module="UserList" />
        </>
    )
}

declare var global: any 

export const getServerSideProps = async() => {
    const scope = 'app2';
    const module = 'UserList';
    try {
        fetch('http://localhost:3002/remoteEntry.js').then(r=>{return r.text()}).then(t=>{
            eval(t);
        });
    } catch (error) {
        console.log(error)
    }
    if (!global[scope]) {
        return{
            props: {
                Component: null,
            }
        }
    }
    
    const Component = await global[scope].get(module).then((factory: any) => {
        const Module = factory();
        return Module;
    })
    return {
        props:{
            Component
        }
    }
}

export default IndexPage
