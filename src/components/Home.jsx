import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import './Home.css'


function Home() {
    return (
        <div>
            <Navbar/>
            <Sidebar/>            
            <div className="content">
            <div className="question">
                <h2>How does React provide independent contexts for subtrees?</h2>
                <button>Ask Question</button>
            </div>
            <p>If, as a thought experiment, I were to write my own <code>createElement</code> implementation for JSX, what might support for <a href="https://reactjs.org/docs/context.html" rel="noreferrer">implicit context</a> look like?</p>
            <p>In particular, I can't figure out how with the limited means of JSX's <code>createElement</code> signature, contexts can be independent for different subtrees. (It appears React's Context handling has become more elaborate in recent versions; I'm mostly interested in the seemingly more straightforward mechanisms of <a href="http://web.archive.org/web/20171225085629/https://reactjs.org/docs/context.html#referencing-context-in-stateless-functional-components" rel="noreferrer">earlier versions</a>.)</p>
            </div>
        </div>
        
    )
}

export default Home;
