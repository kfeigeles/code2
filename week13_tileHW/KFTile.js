class KFTile extends Tile{
	processData(){
		this.lonelyYes = 0;
		this.lonelyNo = 0;

		this.lonelyAnswers = this.table.getColumn('do you feel lonely?');
		console.log(this.lonelyAnswers);

		for(let i = 0; i < this.lonelyAnswers.length; i ++){
			if(this.lonelyAnswers[i] === 'Yes'){
				this.lonelyYes++;
			}else{
				this.lonelyNo++;
			}
		}

		console.log(this.lonelyYes);
	}

	display(){
		super.display();
	}
}