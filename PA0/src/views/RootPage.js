import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import image from "assets/img/bg7.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import TextField from '@material-ui/core/TextField';
import Header from "components/Header/Header.js";
import { encrypt } from "utils/cryto";
import { decrypt } from "utils/cryto";
const useStyles = makeStyles(styles);

export default function RootPage() {
    const classes = useStyles();
    const [encPlainText, setEncPlainText] = React.useState('');
    const [encCipherText, setEncCipherText] = React.useState('');
    const [decPlainText, setDecPlainText] = React.useState('');
    const [decCipherText, setDecCipherText] = React.useState('');
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    const [key, setKey] = React.useState('');
    const [touched, setTouched] = React.useState({
        encPlainText: false,
        decCipherText: false,
        key: false
    });
    const [isEncValid, setIsEncValid] = React.useState(true);
    const [isDecValid, setIsDecValid] = React.useState(true);
    const handleChange = (e) => {
        //e.prevenDefault();
        //console.log(e.target.value);
        //console.log(e.target.type);
        if (e.target.id === 'encPlainText') {
            let val = e.target.value;
            setEncPlainText((state) => {
                state = val;
                setEncCipherText(encrypt(Number(key), state));
                return state;
            });
        }
        else if (e.target.id === 'decCipherText') {
            let val = e.target.value;
            setDecCipherText((state)=>{
                state=val;
                setDecPlainText(decrypt(Number(key), state));
            });
        }
        else if (e.target.id === 'key') {
            setKey(e.target.value);
        }
    }
    const handleBlur = (feild) => () => {
        console.log(feild);
        setTouched({ ...touched, [feild]: true });
    }
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    return (
        <div>
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <Header
                        brand="Demonstration of Caesar Cipher"
                        color="dark"
                        fixed
                    />
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={12}>
                            <Card className={classes[cardAnimaton]}>

                                <CardHeader color="info" className={classes.cardHeader}>
                                    <h4>Encryption</h4>
                                </CardHeader>
                                <CardBody>
                                    <form className={classes.form} autoComplete="off">
                                        <TextField
                                            autoFocus
                                            id="key"
                                            value={key}
                                            required
                                            onChange={handleChange}
                                            variant="outlined"
                                            label="Enter Key"
                                            autoComplete="off"
                                            fullWidth
                                            helperText={
                                                "This feild can't be left Empty."
                                            }
                                        />
                                        <TextField
                                            autoFocus
                                            id="encPlainText"
                                            value={encPlainText}
                                            required
                                            onChange={handleChange}
                                            variant="outlined"
                                            label="Plain Text"
                                            autoComplete="off"
                                            fullWidth
                                            helperText={
                                                "This feild can't be left Empty."
                                            }
                                        />
                                        <TextField
                                            autoFocus
                                            id="encCipherText"
                                            value={encCipherText}
                                            inputProps={{
                                                readOnly: true
                                            }}
                                            disabled={!isEncValid}
                                            variant="outlined"
                                            fullWidth
                                            label="Cipher Text"
                                            helperText={
                                                "This feild can't be left Empty."
                                            }
                                        />
                                    </form>
                                </CardBody>
                                <>
                                    <br />
                                    <br />
                                </>
                                <CardHeader color="info" className={classes.cardHeader}>
                                    <h4>Decription</h4>
                                </CardHeader>
                                <CardBody>
                                    <form className={classes.form} autoComplete="off">
                                        <TextField
                                            autoFocus
                                            id="key"
                                            value={key}
                                            inputProps={{
                                                readOnly: true
                                            }}
                                            fullWidth
                                            variant="outlined"
                                            label="Enter Key"
                                            helperText={
                                                "This feild can't be left Empty."
                                            }
                                        />
                                        <TextField
                                            autoFocus
                                            id="decCipherText"
                                            value={decCipherText}
                                            required
                                            onChange={handleChange}
                                            variant="outlined"
                                            label="Cipher Text"
                                            autoComplete="off"
                                            fullWidth
                                            helperText={
                                                "This feild can't be left Empty."
                                            }
                                        />
                                        <TextField
                                            autoFocus
                                            id="decPlainText"
                                            value={decPlainText}
                                            inputProps={{
                                                readOnly: true
                                            }}
                                            fullWidth
                                            disabled={!isDecValid}
                                            variant="outlined"
                                            label="Plain Text"
                                            helperText={
                                                "This feild can't be left Empty."
                                            }
                                        />
                                    </form>
                                </CardBody>
                            </Card>

                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
