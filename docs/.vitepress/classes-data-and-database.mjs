// Written by scripts/scan-classes.mjs from the addon: the classes of the Data and the Database system.
export const groups = [
  {
    "text": "The database",
    "slug": "database-classes",
    "classes": [
      {
        "name": "Database",
        "base": "RefCounted",
        "file": "databases/database.gd"
      },
      {
        "name": "DatabaseResource",
        "base": "Resource",
        "file": "data_classes/database_resource/database_resource.gd"
      }
    ]
  },
  {
    "text": "Asset databases",
    "slug": "asset-database-classes",
    "classes": [
      {
        "name": "DatabaseAnimation",
        "base": "RefCounted",
        "file": "databases/animation_database.gd"
      },
      {
        "name": "DatabaseAudio",
        "base": "RefCounted",
        "file": "databases/audio_database.gd"
      },
      {
        "name": "DatabaseIcons",
        "base": "RefCounted",
        "file": "databases/icons_database.gd"
      },
      {
        "name": "DatabaseMeshes",
        "base": "RefCounted",
        "file": "databases/mesh_database.gd"
      },
      {
        "name": "DatabaseVFX",
        "base": "RefCounted",
        "file": "databases/vfx_database.gd"
      },
      {
        "name": "ModelSceneDatabase",
        "base": "RefCounted",
        "file": "databases/model_scene_database.gd"
      }
    ]
  }
]
