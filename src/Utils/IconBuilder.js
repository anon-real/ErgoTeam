import {IconPack} from './IconPack'

export default function IconBulider({type,classParam='',height=40,width=40}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" preserveAspectRatio="xMinYMin" height={height} width={width} className={`${classParam}`}>
            {IconPack[type]}
        </svg>
        // <svg   version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	    //     viewBox="0 0 512 512" style={{height:height,width:width}} className={`${classParam}`}>
        //     <g>
	    //         {/* {IconPack[type]} */}
        //         <path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z"></path>
        //     </g>
        // </svg>
    )
}