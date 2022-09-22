

<script>
	export let check
	export let label
	export let gridLabel
	export let gridButton
</script>


<label style:grid-area={gridLabel} id="label"> 
	<span>{label}</span>
	</label>
<input  style:grid-area={gridButton}  type="checkbox"  bind:checked={check}>


<style>
	input {
		height: 100px !important;
		width: 100px !important;
	}
	label {
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 50px;
	}
</style>