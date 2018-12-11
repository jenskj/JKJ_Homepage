import React from 'react';

export class MyFace extends React.Component {
    render() {
        const divStyles = {
            width: 300,
            height: 300,
            position: 'relative',
            border: '1px solid whitesmoke',
            transform: 'skew(-2deg) rotate(2deg)',
            top: -118,
            left: 930,
            zIndex: 5,
            borderRadius: 3,            
            backgroundSize: 'cover',
            overflow: 'hidden',
           
              }
        const imgStyles = {
            width: '110%',
           /*  backgroundImage: "url('https://media.licdn.com/dms/image/C4E03AQHWbpLAPtBSxg/profile-displayphoto-shrink_200_200/0?e=1547078400&v=beta&t=1gOWkL0W-tjbtmLfTh283VfGsyAYasKyVVGRJqP0LYA')", */
            position: 'absolute',
            top: 200,
            transform: 'skew(2deg) rotate(-2deg) translateY(-50%)',
        }
        return (
            <div style={divStyles}>
                
                <img
                src= 'https://lh3.googleusercontent.com/PrWwnlpz0hhy-QhbX20u4-DN4kJ-65KhG7V1xCFPxe2XF0tZo5g2h48s1TflzlF8VcnpiIxSIjCFCCYzUKLnPUVDY1OzQ8gFSZeHk07k9wd7OlZvKqW_79aaPXLSXsek2XmFq7AnrqbcnJ701LaOGXBvQeFhrfBpjV-RID8frv8C-T862FYcxnXHphR-UNCjcllzeUARx2Nu49QMGSd3NMcyeD-DVn9cYNvxUEb-FdZGX7EUWYZX9GYLeenTyyBtEtiPvvezpvN2um7SadR-QeQjG5x_KHbwi3R7Rt_lt51lVCP9iIGCEkmnw6oumbR59luEwoGfAJfDx0RNov-u5lWy_Xi7Q2D6ieSwix4sHRILYIda5rPPUzK2b8vjMZDk72PdBTv8XnRfw_UCXbPb3zskMjkFxHR6fD5hesW61tbKol8Sqr9OdWcEzRjuv-wQh_vRexIZFZSNmxnjy1EsAyMB1DV3Ck_ygQESk7mwZ1WEExsIPVhg-5UsUf8WfzDc_IRFcywADtr2_WozGYb9r4qxYOfi0gG7MI2eVkqknqJh7K-bSZJClyDILyYyjNEAA4bs7tFMRJeGLAPJMFAKtetTHarrwp4w7Xr69rOGho1nWNdGkRW88zP5EZWKMPGI0U_6rdL9Ply-70_FveEgAZvZqFsE1IZ7BTO1ss0zHAgXrHSnUdIsqUM896LkPhvv9o8b5BsIlNWU1NGchg=w653-h869-no'
                style={imgStyles} />
                
            </div>
        )
    }
}