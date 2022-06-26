ubuntu@ip-172-31-4-219:~/graphbook/src/client$ cat App.js
import React, {useState, useEffect }  from 'react';
import { Helmet } from 'react-helmet';
import Feed from './Feed';
import LoginRegisterForm from './components/loginregister';


import '../../assets/css/style.css';

const App = () => {
   const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('jwt'));



        return (
        <div className="container">
            <Helmet>
                <title>Graphbook - Feed</title>
                <meta name="description" content="Newsfeed of all your friends on Graphbook" />
            </Helmet>
                    {loggedIn && (

                        <div>
                        <Feed />
                        </div>
                )}

            {!loggedIn && <LoginRegisterForm changeLoginState={setLoggedIn} />}

                </div>
    )
}

export default App
