import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { useEffect } from "react";

export default function RouterGurad({ routers }) {

    const navigate = useNavigate();
    const location = useLocation();
    const myRouter = useRoutes(routers);

    // 在路由数组中找当前页面路由的对应路由项
    const fineRouter = (r, path) => {
        for (let val of r) {
            // console.log(val);
            if (val.path === path) return val;
            if (val.children) {
                for (let v of val.children) {
                    // console.log(val.path + v.path);
                    if (val.path + '/' + v.path === path) return {
                        path: val.path + '/' + v.path,
                        auth: true
                    };
                    if (v.children) {
                        for (let vv of v.children) {
                            // console.log(val.path + v.path);
                            if (val.path + '/' + v.path + '/' + vv.path === path) return {
                                path: val.path + '/' + v.path + '/' + vv.path,
                                auth: true
                            };

                        }
                    }
                }
            };
        }

        return null;
    }



    //路由守卫判断
    const judgeRouter = (location, navigate, routers) => {
        const { pathname } = location;

        // console.log(pathname);
        // console.log(routers);

        //路由数组找路由项
        const findRoute = fineRouter(routers, pathname);
        // console.log('findRoute:', findRoute);

        // 没找到，说明没有这个路由，直接404
        if (!findRoute) {
            navigate("/404");
            return;
        }
        // 路由项如果有权限需求，进行逻辑验证
        if (findRoute.auth) {
            //用户未登陆，挑战登陆页面
            if (!localStorage.getItem("token")) {
                navigate("/notLogin")
            }
        }
    }


    //基于useEffect监听页面路由改变。然后组件重新加载，又重新校验权限
    useEffect(() => {
        //路由守卫判断
        judgeRouter(location, navigate, routers)
        console.log(location.pathname);
    }, [navigate, location])

    return myRouter;
}



