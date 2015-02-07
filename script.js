var Photo = React.createClass({

  toggleLiked: function() {
    console.log(this.state.liked);
    this.setState({
      liked: !this.state.liked
    });
  },

  upvote: function(){
    this.setState(
      {
        karmaCounter: this.state.karmaCounter+1
      }
      );
  },

  downvote: function(){
    this.setState(
      {
        karmaCounter: this.state.karmaCounter-1
      }
      );
  },

  clickPhoto: function(){
    this.setState(
      {
        fredPicUrl: 'http://tinyurl.com/ke2pso5'
      }
      );
    this.render('http://tinyurl.com/ke2pso5');
  },

  getInitialState: function() {
    return {
      liked: false,
      karmaCounter: 0
    };
  },

  render: function(newUrl) {
    console.log(this.state.fredPicUrl);
    if (newUrl){
      console.log(this.state.fredPicUrl);
      var buttonClass = this.state.liked ? 'active' : '';

      return (
        <div className='photo'>
          <span>Karma: {this.state.karmaCounter}</span>
          <img onClick={this.clickPhoto} src={this.state.fredPicUrl} />

          <div className='bar'>
            <button onClick={this.toggleLiked} className={buttonClass}>
              ♥
            </button>
            <button onClick={this.upvote}
              className="up">/\</button>
            <button onClick={this.downvote}
              className="down">\/</button>
            <span>{this.props.caption}</span>
          </div>
        </div>
      );            
    }else{
      var buttonClass = this.state.liked ? 'active' : '';

      return (
        <div className='photo'>
          <span>Karma: {this.state.karmaCounter}</span>
          <img onClick={this.clickPhoto} src={this.props.src} />

          <div className='bar'>
            <button onClick={this.toggleLiked} className={buttonClass}>
              ♥
            </button>
            <button onClick={this.upvote}
              className="up">/\</button>
            <button onClick={this.downvote}
              className="down">\/</button>
            <span>{this.props.caption}</span>
          </div>
        </div>
      );      
    }
  }
});

var PhotoGallery = React.createClass({

  render: function() {

    var photos = this.props.photos.map(function(photo) {
      return <Photo src={photo.url} caption={photo.caption} />
    });

    return (
      <div className='photo-gallery'>
        {photos}
      </div>
    );
  }
});

var data = [
  {
    url: 'http://tinyurl.com/lkevsb9',
    caption: 'Hong Kong!'
  },
  {
    url: 'http://tinyurl.com/mxkwh56',
    caption: 'Cows'
  },
  {
    url: 'http://tinyurl.com/nc7jv28',
    caption: 'Scooters'
  },
  {
    url: 'http://tinyurl.com/kdbs7qd',
    caption: 'Snorlax'
  },
  {
    url: 'http://s3.amazonaws.com/theoatmeal-img/comics/oatmeal_day/crotch_rockets.png',
    caption: 'Crotch Rockets!!!'
  },
  {
    url: 'http://borgdotcom.files.wordpress.com/2013/05/allie-brosh-hyperbole-and-a-half-depression-part-two-copyright-2013.png',
    caption: '=('
  },
  {
    url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkRMILjOMvfJqBFcgG7aT94KZjOmB4fmGFtcW34gw9C0BlN2OLDg',
    caption: '=|'
  }
];

React.render(<PhotoGallery photos={data} />, document.body);
