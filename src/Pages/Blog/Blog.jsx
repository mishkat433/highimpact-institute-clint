import React from 'react';

const Blog = () => {
    return (
        <div className=' bg-gradient-to-r from-cyan-100 to-blue-200'>
            <div className='w-11/12 mx-auto py-10'>


                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium">
                        What is cors?
                    </div>
                    <div className="collapse-content">
                        <p>CORS is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium">
                        Why are you using firebase? What other options do you have to implement authentication?
                    </div>
                    <div className="collapse-content">
                        <p className='mb-2'>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                        <ul>
                            <li>Cookie-Based authentication</li>
                            <li>Token-Based authentication</li>
                            <li>Third party access(OAuth, API-token)</li>
                            <li>OpenId</li>
                            <li>SAML</li>
                        </ul>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium">
                        How does the private route work?
                    </div>
                    <div className="collapse-content">
                        <p className='mb-2'>Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.
                            The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-2">
                    <div className="collapse-title text-xl font-medium">
                        What is Node? How does Node work?
                    </div>
                    <div className="collapse-content">
                        <p className='mb-2'>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>
                        <p>Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;