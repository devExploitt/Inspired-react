import { LineWave } from  'react-loader-spinner' ;


export const Preloader = () => (
    <div>
        <LineWave 
            height={200}
            width={200}
            color='#4fa94d'
            firstLineColor={"blue"}
            middleLineColor={"green"}
            lastLineColor={"grey"}
        />
    </div>
)