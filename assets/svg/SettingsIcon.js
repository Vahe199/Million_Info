import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SettingsIcon(props) {
    return (
        <Svg
            width={20}
            height={20}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.776 6.047a6.379 6.379 0 00-.811-1.957l.723-1.009-1.77-1.769-1.008.723a6.379 6.379 0 00-1.957-.811L8.751 0H6.249l-.202 1.224a6.38 6.38 0 00-1.957.811l-1.009-.723-1.769 1.77.723 1.009c-.141.226-.269.46-.38.699l.399.185c.177-.38.336-.627.513-.897l-.68-.95 1.241-1.242.95.68.127-.082a5.949 5.949 0 012.078-.862l.148-.03.191-1.153h1.756l.19 1.152.149.03a5.948 5.948 0 012.079.863l.126.083.95-.68 1.242 1.241-.68.95.082.127a5.95 5.95 0 01.862 2.078l.03.148 1.152.191v1.756l-1.151.19-.03.149a5.95 5.95 0 01-.863 2.079l-.083.126.68.95-1.242 1.242-.95-.68-.125.082a5.95 5.95 0 01-2.08.862l-.147.03-.191 1.152H6.622l-.19-1.151-.149-.03a5.949 5.949 0 01-2.078-.863l-.127-.083-.95.68-1.242-1.242.68-.95-.082-.125a5.95 5.95 0 01-.862-2.08l-.03-.147-1.153-.191V6.622l1.152-.19c.071-.343.134-.63.286-1.034l-.412-.154c-.097.26-.178.53-.241.803L0 6.249v2.502l1.224.202c.16.694.432 1.35.811 1.957l-.723 1.009 1.77 1.769 1.008-.723a6.378 6.378 0 001.957.811L6.249 15h2.502l.202-1.224a6.378 6.378 0 001.957-.811l1.009.723 1.769-1.77-.723-1.008a6.378 6.378 0 00.811-1.957L15 8.751V6.249l-1.224-.202z"
                fill="#000"
            />
            <Path
                d="M11.389 9.136A4.223 4.223 0 007.5 3.282 4.223 4.223 0 003.282 7.5 4.223 4.223 0 007.5 11.718c1.517 0 2.925-.82 3.673-2.142l-.383-.217a3.787 3.787 0 01-3.29 1.92A3.783 3.783 0 013.722 7.5 3.783 3.783 0 017.5 3.722a3.783 3.783 0 013.484 5.244l.405.17z"
                fill="#000"
            />
        </Svg>
    )
}

export default SettingsIcon