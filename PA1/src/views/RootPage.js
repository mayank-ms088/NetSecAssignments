import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import TextField from '@material-ui/core/TextField';
import Header from "components/Header/Header.js";
import { Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox"
import DES from 'utils/crypto.js'
import CanvasChart from './chart'
import LinePlot from "./LinePlot";
const useStyles = makeStyles(styles);

export default function RootPage() {
    const classes = useStyles();
    const [halfWidth, setHalfWidth] = React.useState('');
    const [rounds, setRounds] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [plot, setPlot] = React.useState(false);
    const [desData, setDesData] = React.useState({});
    const handleChange = (e) => {
        if (e.target.id === "rounds") {
            setRounds(e.target.value);
        }
        else if (e.target.id === "halfWidth") {
            setHalfWidth(e.target.value);
        }
    }
    const handleClick = () => {
        setDesData(DES(rounds, halfWidth, checked));
        setPlot(true);
    }


    return (
        <div>
            <div className={classes.container}>

                <div className={classes.container}>
                    <Header
                        brand="Demonstration of Caesar Cipher"
                        color="dark"
                        fixed
                    />

                    <form>
                        <TextField
                            autoFocus
                            id="rounds"
                            value={rounds}
                            onChange={handleChange}
                            variant="outlined"
                            label="No of Rounds"
                            helperText={
                                "This feild can't be left Empty."
                            }
                        />
                        <div className={classes.space50}></div>
                        <TextField
                            autoFocus
                            id="halfWidth"
                            value={halfWidth}
                            onChange={handleChange}
                            variant="outlined"
                            label="Half Width"
                            helperText={
                                "Half Width of the data block"
                            }
                        />
                        <div className={classes.space50}></div>
                        <div style={{ color: "black" }}>
                            Weak Key
                            <Checkbox
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                                color={"dark"}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </div>
                        <div className={classes.space50}></div>
                        <Button color="dark" onClick={handleClick}>Encrypt</Button>
                    </form>
                    {
                        plot && (
                            <>
                                <div className={classes.container} style={{color: "black"}}>
                                    <h2>Round Keys and Cipher Text</h2>
                                    <pre>{desData.keys}</pre>
                                </div>
                                <div className={classes.container} style={{color: "black"}}>
                                    <h2>Demonstration of Avalanche Effect</h2>
                                    <CanvasChart datap={desData.mixed.p} datac={desData.mixed.c} n={rounds} w={halfWidth} />
                                </div>
                                <div className={classes.container} style={{color: "black"}}>
                                    <h2>Plain Text and Cipher Text Plots</h2>
                                    <LinePlot xs={desData.plain.x} ys={desData.plain.y} />
                                </div>
                            </>
                        )
                    }
                </div>

            </div>

        </div>
    );
}
