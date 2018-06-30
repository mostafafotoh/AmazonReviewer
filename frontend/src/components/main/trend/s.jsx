{this.state.data.map(record => {
    return (

        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image="https://images-na.ssl-images-amazon.com/images/I/81l23w9I9cL._AC_.jpg"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    Lizard
                </Typography>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species,
                    ranging
                    across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>

    )
})}