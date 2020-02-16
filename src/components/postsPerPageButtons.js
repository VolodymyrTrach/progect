import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core';

export default function PagesButtonGroup(changeItems) {
    const itemsPerPage = [15, 30, 60]
    return (
        <ButtonGroup variant="contained" aria-label="contained primary button group">
            {itemsPerPage.map(number => (
                <Button
                    key={number}
                    onClick={() => changeItems(number)}>
                    {number}
                </Button>))}
        </ButtonGroup>
    );
}
