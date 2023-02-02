

import LOGO from '../../assets/logo.png'
import style from '../../css/headerStyle.module.css'


function Header() {

    return (
        <>
            <div className={style.header}>
                <div className={style.container}>

                    <a href="http://localhost:3000/"  >
                        <img style={{ height: '200px', width: '300px' }} src={LOGO}>
                        </img>
                    </a>
                    <div className={style.textDetail}>
                        <h1 >
                            CÔNG TY CỔ PHẦN TSHOP TECHNOLOGY <br />
                        </h1>
                        <p>
                            &mdash; Công Nghệ Tương Lai !!! &mdash;
                        </p>
                    </div>
                    <div className={style.tech}>

                    </div>
                </div>
            </div>
        </>
    );


}

export default Header