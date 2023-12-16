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


export const OnWinStyles = ({
    wrap:css({
        display: "block",
        marginTop: "35px",
        width: "100%",
        height: "50px",
        "> label":{
            color: "white",
            fontFamily: "Sans-serif",
            fontSize: "12px",
            height:"20%",
        },
        "> div":{
            display: "flex",
            width: "100%",
            height: "80%",
            marginTop: "5px",
            background: "#2f4553",
            "> div":{
                margin: "auto",
                display: "flex",
                height: "90%",
                width: "98%",
                "> div":{
                    display: "flex",
                    width: "52%",
                    height: "99%",
                    margin: "auto",
                    "> button:first-child ":{
                        background: "#0f212e",
                        border: "none",
                        color: "white",
                        borderRadius: "5px",
                        margin: "2px",
                    },
                    "> button:last-child ":{
                        background: "#2f4553",
                        border: "none",
                        color: "white",
                        margin: "2px",
                        "&:hover": {
                          background: "#557086",
                          borderRadius: "5px",
                        },
                      },
                },
                "> div:last-child":{
                    width: "48%",
                    height: "99%",
                    display: "flex",
                    background: "#0f212e",
                    margin: "auto",
                    "> input": {
                        width: "85%",
                        height: "97%",
                        color: "white",
                        background: "transparent",
                        border: "none",
                        borderRadius: "3px",
                        outline: "none",
                    },
                    "&:hover": {
                        border: "#2f4553 2px solid",
                    },
                    "> div":{
                        display: "flex",
                        height: "100%",
                        width: "15%",
                        "> div":{
                            margin: "auto",
                            "> span":{
                                width: "100%",
                                height: "100%",
                                color: "white",
                                fontFamily: "Sans-serif",
                                fontSize: "12px",
                            }
                        }
                    }
                },
                // "> toggleinputwrap": css({
                //     width: "48%",
                //     height: "99%",
                //     display: "flex",
                //     background: "#213743",
                //     margin: "auto",
                //     "> input": {
                //       width: "85%",
                //       height: "97%",
                //       color: "white",
                //       background: "transparent",
                //       border: "none",
                //       borderRadius: "3px",
                //       outline: "none",
                //       cursor: "no-drop",
                //     },
                //     "&:hover": {
                //       border: "#2f4553 2px solid",
                //     },
                //     "> div":{
                //         display: "flex",
                //         height: "100%",
                //         width: "15%",
                //         "> div":{
                //             margin: "auto",
                //             "> span":{
                //                 width: "100%",
                //                 height: "100%",
                //                 color: "white",
                //                 fontFamily: "Sans-serif",
                //                 fontSize: "12px",
                //             }
                //         }
                //     }
                //   }),
            }
        }
    })
})