const { Schema, model } = require("mongoose");

const TaskSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "El titulo es obligatorio"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

TaskSchema.methods(toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
    })

module.exports = model("Task", TaskSchema);
