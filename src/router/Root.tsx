import React, { useEffect, useState } from 'react' 

interface IRoot {
    data?: number,
    route?: {}
}
type Props = IRoot
const Root = (props: Props) => {
    const { data, route } = props
    const [ oIndex, setOIndex ] = useState(0)

    console.log(oIndex)
    console.log(route)

    return <div>
        <div>123</div>
    </div>
}

export default Root