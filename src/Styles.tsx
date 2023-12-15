/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"



export const manualbetbutton = ({
    wrap: css({
    width: "100%",
    height: "45px",
    marginTop: "35px",
    "> button": {
      width: "100%",
      height: "100%",
      backgroundColor: "#00e701",
      borderRadius: "5px",
      border: "none",
      "&:hover": {
        backgroundColor: "#1fff20",
      }
    }
  })
})

  export const autobetbutton = ({
    wrap: css({
    width: "100%",
    height: "45px",
    marginTop: "35px",
      "> button": {
        width: "100%",
        height: "100%",
        backgroundColor: "#00b801",
        borderRadius: "5px",
        border: "none",
        "&:hover": {
          backgroundColor: "#00b801",
        },
    },
  }),
})

export const betsNumberStyles = ({
    wrap:css({
        display:"block",
        width:"100%",
        height:"50px",
        marginTop:"30px",
        "> label":{
            height:"20%",
            color:"white",
            fontFamily:"Sans-serif",
            fontSize:"12px",
        },
        "> div":{
            display:"flex",
            width:"100%",
            background: "#2f4553",
            height:"80%",
            marginTop: "5px",
            "> div":{
                margin:"auto",
                display:"flex",
                height:"90%",
                width:"98%",
                background:"#0f212e",
                "> div":{
                    width:"100%",
                    height:"100%",
                    display:"flex",
                    background:"transparent",
                    margin:"auto",
                    "> input":{
                        width:"85%",
                        height:"97%",
                        color:"white",
                        background:"transparent",
                        border:"none",
                        borderRadius:"3px"
                    },
                    "> div":{
                        display:"flex",
                        height:"100%",
                        width:"15%",
                        "> div":{
                            margin:"auto",
                                "> span":{
                                    width:"100%",
                                    height:"100%",
                                    color:"white",
                                    fontFamily:"Sans-serif",
                                    fontSize:"10px",
                                }
                        }
                    }
                }
            }
        }
    }),
})