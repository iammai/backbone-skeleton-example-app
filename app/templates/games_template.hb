
{{#if models.length}}
<div id="games-container">
    {{#each models}}
    <div class="card-panel">
        <a class="btn-floating btn-large waves-effect waves-light pink upvote"><i class="mdi-maps-navigation"></i><span class="upvote-count">{{this.upvotes}}</span></a>
        <span class="story-header"> {{this.name}}</span>
    </div>
    {{/each}}
</div>
{{else}}
<div class="container">
    <p>No games currently.</p>
</div>
{{/if}}
