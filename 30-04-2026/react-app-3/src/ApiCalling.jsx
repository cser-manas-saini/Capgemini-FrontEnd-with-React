import { Fragment, useEffect, useState } from "react"

const ApiCalling = () => {

    let [apiData, setApiData] = useState([]);
    // ! UseEffect is a hook that we use to handle the sideEffects of (asynchronous process)

    // It will accept two parameters first one will be a callback function and second one is dependency array

    useEffect(() => {
        (async () => {
            let res = await fetch("https://api.github.com/users")
            console.log(res);
            let data = await res.json();
            console.log(data);

            setApiData([...data])
        })()
    }, [])
    return (
        <div>
            {apiData.map((v) => (
                <Fragment key={v.id}>
                    <p>
                        <b>{v.id}</b> {v.login}
                    </p>
                    <img src={`${v.avatar_url}`} height= "200px"  />
                </Fragment>
            ))}
        </div>
    );
}

export default ApiCalling