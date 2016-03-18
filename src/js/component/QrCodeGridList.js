import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Paper from 'material-ui/lib/paper';

class QrCodeGridList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-md-9">
          <div className="row">

            {tilesData.map(tile => (
              <div key={tile.title}>
                <div className="col-md-2">
                  <img src={imgUrl} className="img-responsive" />
                </div>
                <div className="col-md-2">
                  <img src={imgUrl} className="img-responsive" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-3">report</div>
        </div>
      </div>
    );
    // return (
    //   <div className="row">
    //     <div className="col-md-9">
    //       <div style={styles.root}>
    //         <GridList
    //           cellHeight={200}
    //           style={styles.gridList}
    //           cols={6}
    //           >
    //           {tilesData.map(tile => (
    //             <GridTile
    //               key={tile.title}
    //               title={tile.title}
    //               subtitle={<span>by <b>{tile.author}</b></span>}
    //               actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
    //               >
    //               <img src={tile.img} className="img-responsive"/>
    //             </GridTile>
    //           )) }
    //         </GridList>
    //       </div>
    //     </div>
    //     <div className="col-md-3">
    //       report
    //     </div>
    //   </div>
    // );
  }
}

const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png';

const tilesData = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Qr-3.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    // width: 500,
    // height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

export default QrCodeGridList;