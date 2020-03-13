import React from 'react';

function Navbar() {
    return (
        <div className="c-navbar">
            <div className="item first"></div>
            <div className="item">
                <p className="emperor gigant p-0 m-0">Secret Friend</p>
            </div>
            <div className="item pt-0 noPadding pb-0 pr-70 pl-0">
                <img
                    src={require("./../assets/img/account.png")}
                    alt="Hallison Melo"
                    className="c-avatar small"
                />
                <div className="ml-20">
                    <p className="monsoon gigant mb-5">Hallison Melo</p>
                    <p className="monsoon large">Administrator</p>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
