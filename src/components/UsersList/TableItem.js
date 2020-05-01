import React from 'react';

export default ({user : { id, name, age }}) => {
	return <div key={id}>[{id}] {name} age: {age}</div>
}
