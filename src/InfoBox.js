import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* Title i.e. Coronavirus cases */}
                <Typography className="infobox__title" color="textSecondary">
                    {title}
                </Typography>
                {/* +120k Number of cases*/}
                <h2 className="infobox__cases">{cases}</h2>
                {/* 1.2m total cases*/}
                <Typography className="infobox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    );
}

export default InfoBox;
