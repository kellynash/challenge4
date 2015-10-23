var DATA = {
  title: 'University of Montana: Student Directory',
  items: [
    { id: 1, name: 'John', email: 'John@u.mt.com', gpa: 4.0 },
    { id: 2, name: 'Sarah', email: 'Sarah@u.mt.com', gpa: 3.0 },
    { id: 3, name: 'Paul', email: 'Paul@u.mt.com', gpa: 2.7 },
    { id: 4, name: 'Emily', email: 'Emily@u.mt.com', gpa: 2.6 },
    { id: 5, name: 'Derek', email: 'Derek@u.mt.com', gpa: 3.8 },
    { id: 6, name: 'Kathy', email: 'Kathy@u.mt.com', gpa: 3.9 },
    { id: 7, name: 'Brina', email: 'Brina@u.mt.com', gpa: 2.7 },
    { id: 8, name: 'Clare', email: 'Clare@u.mt.com', gpa: 3.6 },
    { id: 9, name: 'Mike', email: 'Mike@u.mt.com', gpa: 2.0 },
  ]
};

//isolates id 
// funtion filt(n){
//     return n.id;
// }

function myMapper(n){
    return <h3> {n.id} </h3>;
}

var id = DATA.items.map(myMapper);

//isolates title "University of Montana: Student Directory"
var Title = DATA.title;

//isolates student name, email, gpa
function filt(n){
    return n.name
}

var mapperTwo(n){
    return (
        <p> {n.name} </p>;
        <p> {n.email} </p>;
        <p> {n.gpa} </p>;
    );
}

var StudentPanels = React.createClass({
    render: function() {

        var studentPanel = this.props.DATA.map(function(mapperTwo));

        function myMapper(n){
            return <h3> {n.id} </h3>;
        }

        var id = DATA.items.map(myMapper);

//isolates title "University of Montana: Student Directory"
var Title = DATA.title;

        return (
				<div>
					<div className="container">
                        <div className="jumbotron">
                             <h4> {Title}</h4>
                        </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title">Student {id}</h3>
                              </div>
                              <div className="panel-body">
                                <p>{Name}</p>
                                <p>{Email}</p>
                                <p>{gpa}</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title">Student {id}</h3>
                              </div>
                              <div className="panel-body">
                                <p>{Name}</p>
                                <p>{Email}</p>
                                <p>{gpa}</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title">Student {id}</h3>
                              </div>
                              <div className="panel-body">
                                <p>{Name}</p>
                                <p>{Email}</p>
                                <p>{gpa}</p>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title">Student {id}</h3>
                              </div>
                              <div className="panel-body">
                                <p>{Name}</p>
                                <p>{Email}</p>
                                <p>{gpa}</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title">Student {id}</h3>
                              </div>
                              <div className="panel-body">
                                <p>{Name}</p>
                                <p>{Email}</p>
                                <p>{gpa}</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title">Student {id}</h3>
                              </div>
                              <div className="panel-body">
                                <p>{Name}</p>
                                <p>{Email}</p>
                                <p>{gpa}</p>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title">Student {id}</h3>
                              </div>
                              <div className="panel-body">
                                <p>{Name}</p>
                                <p>{Email}</p>
                                <p>{gpa}</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title">Student {id}</h3>
                              </div>
                              <div className="panel-body">
                                <p>{{Name}}</p>
                                <p>{Email}</p>
                                <p>{gpa}</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel panel-default">
                              <div className="panel-heading">
                                <h3 className="panel-title">Student {id}</h3>
                              </div>
                              <div className="panel-body">
                                <p>{Name}</p>
                                <p>{Email}</p>
                                <p>{gpa}</p>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
//Create each individual Student Panel
				</div>
        	);
    }
});

var StudentBox = React.createClass({
    render: function() {
        return (
				<div>
                    <StudentPanels data={this.data}/>
					//Render Student List
                    
				</div>
        	);
    }
});

React.render(<StudentBox/>, document.body);