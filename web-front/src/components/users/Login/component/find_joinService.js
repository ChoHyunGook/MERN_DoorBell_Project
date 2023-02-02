import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as React from "react";


export default function Find_joinService(){
    return(
        <>
            <Grid container spacing={0}>
            <Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="text"
                    sx={{ mt: 5, mb: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:"120px"}}
                    size="small"
                    href="/findId"
                    style={{backgroundColor:"white"}}
                >
                    아이디찾기
                </Button>
            </Grid>
            <Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="text"
                    sx={{ mt: 5, mb: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:"120px"}}
                    size="small"
                    href="/findPwSelect"
                    style={{backgroundColor:"white"}}
                >
                    비밀번호찾기
                </Button>
            </Grid>
            <Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="text"
                    sx={{ mt: 5, mb: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:"120px"}}
                    size="small"
                    href="/joinAgree"
                    style={{backgroundColor:"white"}}
                >
                    회원가입
                </Button>
            </Grid>
            </Grid>
        </>
            )
}